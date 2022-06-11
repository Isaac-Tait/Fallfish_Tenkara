import React, { useState } from "react";

const Comments = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "", 
        website: "", 
        comment: ""
    });

    const handleChange = e => {
        setFormState({
            ...formState, 
            [e.target.name]: e.target.value
        })
    };

    return (
        <div class="my-4 mx-4 md:w-2/3 md:mx-auto flex flex-col">
            <hr />
            <form
                name="comments-queue" 
                method="POST" 
                data-netlify="true" 
                netlify-honeypot="bot-field"
                action="/thank-you"
            >
            <input 
                type="hidden" 
                name="form-name" 
                value="comments-queue"
            />
            <input 
                class="hidden" 
                name="bot-field" 
            />
            <input 
                id="form-page-url" 
                type="hidden" 
                name="form-page-url" 
                value={`${typeof window !== 'undefined' ? window.location.href : ''}`} 
            />
            <p>Do you have something to say or meaningful to contribute? If so, please feel free to comment using the form below.</p>
            
            <div class="md:flex md:flex-row">
                <p>
                    <label htmlFor="name" class="ml-4 font-semibold text-red-500">Name:</label>
                </p>
                <p>
                    <input
                        class="ml-2 mt-2 pl-2 border-dashed border-2 border-red-500" 
                        type="text" 
                        name="name" 
                        onChange={handleChange}  
                        value={formState.name} 
                    />
                </p>

                <p>
                    <label htmlFor="email" class="ml-4 font-semibold text-red-500">Email:</label>
                </p>
                <p>
                    <input 
                        class="ml-2 mt-2 pl-2 border-dashed border-2 border-red-500"
                        type="email" 
                        name="email" 
                        onChange={handleChange} 
                        value={formState.email} 
                    />
                </p>

                <p>
                    <label htmlFor="website" class="ml-4 font-semibold text-red-500">Website:</label> 
                </p>
                <p>
                    <input 
                        class="ml-2 mt-2 pl-2 border-dashed border-2 border-red-500"
                        type="text" 
                        name="website" 
                        onChange={handleChange} 
                        value={formState.website} 
                    />
                </p>
            </div>

            <div class="">
                <p>
                    <label htmlFor="comment" class="ml-4 font-semibold text-red-500">Comment:</label> 
                        <input
                            class="overflow-y-auto ml-2 mt-2 box-border h-2/3 w-3/4 p-2 border-dashed border-2 border-red-500"            
                            type="text" 
                            name="comment" 
                            onChange={handleChange}  
                            value={formState.comment} 
                        />
                </p>
            </div>
            
            <button type="submit" class="tracking-wide m-2 inline-block px-3 py-1 rounded-lg shadow-lg bg-red-500 text-white hover:bg-gray-300 hover:text-black text-xs md:text-base">Send your comment (no spam I promise).</button>
            
            </form>
        </div>
    )
};

export default Comments