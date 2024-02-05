import React from 'react'
import "../styles/faq-styles.css"

const FAQ = () => {
    return (
        <div>

            <div className="faq" id="faq">

                <div className="text-light faq-heading">
                    <h1>Frequently asked questions</h1>
                </div>

                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Can I upgrade my preference at the event?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet luctus est, et fringilla quam. In hac habitasse platea dictumst. Etiam euismod pretium lorem, ut tristique lacus suscipit id</div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Do I need to bring my own fight stick/controller?
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet luctus est, et fringilla quam. In hac habitasse platea dictumst. Etiam euismod pretium lorem, ut tristique lacus suscipit id</div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Where can I find the tournament rules?
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet luctus est, et fringilla quam. In hac habitasse platea dictumst. Etiam euismod pretium lorem, ut tristique lacus suscipit id</div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                Are food and drinks allowed at the venue?
                            </button>
                        </h2>
                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet luctus est, et fringilla quam. In hac habitasse platea dictumst. Etiam euismod pretium lorem, ut tristique lacus suscipit id</div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default FAQ