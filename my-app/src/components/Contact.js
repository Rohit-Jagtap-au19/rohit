import React from 'react'
export default function Contact(props) {
    let mystyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
        border: '1px groove',
        borderColor: 'dark' ? 'black' : '#042743'
    }
    return (
        <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
            <h2>Contact Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item mt-1" style={mystyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" style={mystyle} aria-controls="collapseOne">
                            <strong>Rohit Jagtap</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Email - prjagtap90@gmail.com <br /> Email - imredskull9@gmail.com
                        </div>
                    </div>
                </div>
                <div className="accordion-item mt-1" style={mystyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" style={mystyle} aria-controls="collapseTwo">
                            <strong>Pournima Gaikwad</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Email - pournima2496@gmail.com <br />Email - pournimagaikwad2210@gmail.com
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}