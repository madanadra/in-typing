import { useEffect, useState } from "react";

export default function Typed({type, backspace, delay, duration, cursor}: 
{type: string | [string], backspace: number | [number], delay?: number, duration?: number, cursor?: string}) {
    const typeProp = typeof(type) === 'string' ? [type] : type 
    const backspaceProp = typeof(backspace) === 'number' ? [backspace] : backspace
    const durationProp = duration ? duration : 100
    const delayProp = delay ? delay : durationProp

    const [result, setResult] = useState<string[]>(new Array(typeProp.length).fill(''))
    const [num, setNum] = useState<number>(0)
    const [back, setBack] = useState<boolean>(false)
    const [line, setLine] = useState<boolean>(true)

    useEffect(() => {
        const typing = setInterval(() => {
            if (num < typeProp.length && !back) {
                if (result[num] !== typeProp[num]) {
                    const newResult = [...result]
                    newResult[num] = typeProp[num].substring(0, result[num].length+1)
                    setResult(newResult)
                    setLine(true)
                } else if (result[num] === typeProp[num]) {
                    if (backspaceProp.includes(num)) {
                        clearInterval(typing)
                        const backspacing = setTimeout(() => {
                            setBack(true)
                        }, delayProp)

                        return () => { 
                            clearTimeout(backspacing)
                        }
                    } else {
                        setNum(num+1)
                    }
                }
            } else if (num < typeProp.length && back) {
                if (result[num].length) {
                    const newResult = [...result]
                    newResult[num] = typeProp[num].substring(0, result[num].length-1)
                    setResult(newResult)
                    setLine(true)
                } else {
                    setBack(false)
                    setNum(num+1)
                }
            }
        }, durationProp)

        return () => { 
          clearInterval(typing)
        };
    }, [result, num, back])

    useEffect(() => {
        setTimeout(() => {
            setLine(!line)
        }, 500)

        return () => {}
    }, [line])

    return (<h1 style={{borderRight: `${line && cursor ? `1px solid ${cursor}` : 'none'}`}}>{result}</h1>)
}
