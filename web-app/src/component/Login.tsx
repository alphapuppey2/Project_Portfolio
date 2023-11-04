import React from "react";


export default function Login(){
    return(
            <>
            <div className="loginBox container rounded-2xl p-5 flex flex-row h-1/2 max-h-1/2 w-3/6 min-w-1/2 border-solid border-2 border-orange-700">
                <div className="w-1/3 bg-red-200">
                    side
                </div>
                <form className="flex w-2/3 flex-col" method="post">
                    <span>
                    <label htmlFor="user">
                        Username:
                    </label>
                    <input name="user" type="text" placeholder="Username"/>
                    </span>
                    <span>
                    <label htmlFor="pass">
                        Password:
                    </label>
                    <input name="pass" type="text" placeholder="password" />
                    </span>
                    <button type="submit" className="bg-sky-500 rounded-2xl p-2" >Sign in</button>
                </form>
            </div>
            </>
    )
}