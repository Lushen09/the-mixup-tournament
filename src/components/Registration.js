import React, { useState } from 'react'
import { gameData } from './GameData';
import "../styles/registration-styles.css"


const Registration = () => {

    //Registration info
    const [competitor, setCompetitor] = useState();
    const [spectator, setSpectator] = useState();

    const [gameTotal, setGameTotal] = useState(0);
    const [grandtotal, setGrandtotal] = useState(0);

    const [toastMessage, setToastMessage] = useState('');

    const spectatorSelect = () => {
        setCompetitor(false);
        setSpectator(true);
        setToastMessage('Spectator selected');

        const toast = document.getElementById("toast");
        toast.className = "show";
        setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
    }

    const competitorSelect = () => {
        setSpectator(false);
        setCompetitor(true);
        setToastMessage('Competitor selected');

        const toast = document.getElementById("toast");
        toast.className = "show";
        setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
    }

    const startReg = (e) => {
        if (spectator === true) {
            setGrandtotal(50)
        }
        else if (competitor === true) {
            setGrandtotal(75)
        }
    }

    // Checkbox logic

    const [checkedState, setCheckedState] = useState(
        new Array(gameData.length).fill(false)
    );

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);

        const totalPrice = updatedCheckedState.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                    return sum + gameData[index].price;
                }
                return sum;
            },
            0
        );

        setGameTotal(totalPrice);
    }

    return (
        <div className="registration" id="registration">
            <div className="registration-content">
                <div class="container text-center">
                    <div className="registration-heading">
                        <h2>REGISTRATION</h2>
                    </div>

                    <div class="row">

                        <div class="col-md-6 column-style">
                            <div className="card">
                                <h1 className="card-heading">Spectator</h1>
                                <p class="price">£50</p>
                                <div className="product-list">
                                    <ul>
                                        <li>The Mixup AO Arena access</li>
                                        <li>Exclusive event hamper</li>
                                        <li>Access to retro arcade, developer showcase</li>
                                        <li>Custom name badge</li>
                                    </ul>
                                </div>
                                <p><button onClick={spectatorSelect}>Select</button></p>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div className="card">
                                <h1 className="card-heading">Competitor</h1>
                                <p class="price">£75</p>
                                <div className="product-list">
                                    <ul>
                                        <li>All of spectator benifits</li>
                                        <li>Entry to single game</li>
                                        <li>+£10 for additional game</li>
                                        <li>Access to fighters lounge</li>
                                        <li>Deadline 20th December</li>
                                    </ul>
                                </div>
                                <p><button onClick={competitorSelect}>Select</button></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Disable button if event preference is not selected */}
            <div className="register-button-section">
                <button type="button" class="register-button" onClick={startReg} data-bs-toggle="modal" data-bs-target="#exampleModal" disabled={!competitor && !spectator ? true : false}>
                    REGISTER
                </button>
            </div>



            {/**********************************Modal**************************************************/}

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Registration</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <form>
                            <div class="modal-body">
                                <div class="container-fluid">

                                    <div class="row row-name">
                                        <div class="col-md-6"><input type="text" class="form-control" placeholder="First name" aria-label="First name" required /></div>
                                        <div class="col-md-6 col"><input type="text" class="form-control" placeholder="Last name" aria-label="Last name" required /></div>
                                    </div>

                                    <div class="row row-email">
                                        <div class="col-md-12"><input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email Address" required /></div>
                                    </div>

                                    <div class="row row-tag">
                                        <div class="col-md-12"><input type="text" class="form-control" placeholder="ID Tag Name" required /></div>
                                    </div>

                                    <div class="row row-birthday">
                                        <div class="col-md-6">
                                            <label for="birthday">Birthday:</label>
                                            <input type="date" id="birthday" name="birthday" required />
                                        </div>
                                        <div class="col-md-6 col">
                                            <select class="form-select form-select-sm" aria-label="Default select example">
                                                <option selected>Gender</option>
                                                <option value="1">Male</option>
                                                <option value="2">Female</option>
                                                <option value="3">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Competitor form loads only if competitor preference is selected*/}

                                    {competitor ?
                                        <>

                                            <div className="competitor-section">
                                                <h3>Select games:</h3>
                                            </div>

                                            <ul className="game-checkbox">
                                                {gameData.map(({ name, price }, index) => {
                                                    return (
                                                        <div className="game-list">
                                                            <li key={index}>
                                                                <input
                                                                    type="checkbox"
                                                                    id={`custom-checkbox-${index}`}
                                                                    name={name}
                                                                    value={name}
                                                                    checked={checkedState[index]}
                                                                    onChange={() => handleOnChange(index)}
                                                                />
                                                                <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                                            </li>
                                                        </div>
                                                    );
                                                })}
                                            </ul>

                                        </>
                                        : null}
                                </div>
                            </div>

                            <div class="modal-footer">
                                <div className="price"><p>Total: £{grandtotal + gameTotal}</p></div>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Show toast when event is selected */}
            <div className="toast-section">
                <div id="toast">{toastMessage}</div>
            </div>

        </div>
    )
}

export default Registration