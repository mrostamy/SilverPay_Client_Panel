
import { copyFile } from 'fs'
import React, { useRef } from 'react'

export default function InventoryWalletList() {

    const inputRef = useRef<HTMLInputElement>(null)


    let text = "";

    // const text=inputRef.current?.innerHTML ?? '';


    const copy = () => {

        console.log(inputRef.current?.value)
        text = inputRef.current?.value as string

        navigator.clipboard.writeText(text)
    }




    return (
        <>
            <div className="container">
                <p id="test">لیست موجودی ها</p>
                <input type="text" ref={inputRef} />
                <button onClick={copy}>copy</button>
            </div>

        </>
    )
}
