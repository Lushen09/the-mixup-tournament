import React from 'react'
import "../styles/viewing-styles.css"


function Viewing() {
    return (
        <div className="viewing" id="schedule">
            <div className="text-light">
                <h2 className="viewing-heading">Where to watch</h2>
            </div>

            <div className="container text-center viewing-text">

                <p>Not able to make it to The Mixup? We've got you covered! Be a part of the action from anywhere in the world. Every second of the tournament will be streamed on various different platforms so you can watch whenever and however you want. The tournament will also feature some of the best commentators around to make sure you are entertained throughout the action. More information to follow after registration concludes:</p>

            </div>

            <div class="container text-center">

                <div class="row">

                    <div class="col-md-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-twitch logo-image" viewBox="0 0 16 16">
                            <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142z" />
                            <path d="M11.857 3.143h-1.143V6.57h1.143zm-3.143 0H7.571V6.57h1.143z" />
                        </svg>
                        <h4 class="text-light">Twitch</h4>
                    </div>

                    <div class="col-md-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-youtube logo-image" viewBox="0 0 16 16">
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                        </svg>
                        <h4 class="text-light">YouTube</h4>
                    </div>

                </div>
            </div>

            {/* Schedule section */}
            <div class="container text-center">
                <div className="text-light">
                    <h2 className="schedule-heading">Schedule</h2>
                </div>

                <div class="table-responsive ">
                    <table class="table table-borderless">
                        <thead class="table-light">

                            <tr>
                                <th scope="col"></th>
                                <th scope="col">12h00</th>
                                <th scope="col">14h00</th>
                                <th scope="col">16h00</th>
                                <th scope="col">18h00</th>
                                <th scope="col">20h00</th>
                                <th scope="col">22h00</th>
                            </tr>

                        </thead>
                        <tbody class="table-dark ">

                            <tr >
                                <th scope="row">Tekken 8</th>
                                <td colspan="2" class="table-primary">Pools</td>
                                <td colspan="2" class="table-warning">Top 32</td>
                                <td colspan="2" class="table-danger">Top 8</td>
                            </tr>

                            <tr>
                                <th scope="row">Mortal Kombat 1</th>
                                <td colspan="2" class="table-primary">Pools</td>
                                <td colspan="2" class="table-warning">Top 32</td>
                                <td colspan="2" class="table-danger">Top 8</td>
                            </tr>

                            <tr>
                                <th scope="row">Guilty Gear Strive</th>
                                <td colspan="2" class="table-primary">Pools</td>
                                <td class="table-warning">Top 16</td>
                                <td colspan="2" class="table-danger">Top 8</td>
                                <td class="table-light"></td>
                            </tr>

                            <tr>
                                <th scope="row">Street Fighter 6</th>
                                <td colspan="2" class="table-primary">Pools</td>
                                <td colspan="2" class="table-warning">Top 32</td>
                                <td colspan="2" class="table-danger">Top 8</td>
                            </tr>

                            <tr>
                                <th scope="row">DragonBall FighterZ</th>
                                <td colspan="2" class="table-primary">Pools</td>
                                <td class="table-warning">Top 16</td>
                                <td colspan="2" class="table-danger">Top 8</td>
                                <td class="table-light"></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    )
}

export default Viewing