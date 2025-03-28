import { useEffectDep, useRef, useState} from "tsx5";


const Page = () => {

    const [clicked, setClicked] = useState(0);




     const effect = useRef<HTMLElement>(null)

    useEffectDep(() => {


            if(effect.current) {
                effect.current.textContent =  "use Effect " + clicked().toString()

            }

    }, [clicked])

    return (
        <div className="container">
            <h1>Bem-vindo ao TSX5</h1>
            <p>
                Este é um template minimalista utilizando TSX e HTML5, permitindo criar interfaces reativas sem depender de frameworks pesados.
            </p>
            <h2 className="text-center">{clicked}</h2>
            <h2 ref={effect} className="text-center"> use Effect  0</h2>
            <button className="button" onClick={_e =>  setClicked(prev =>  prev + 1) }>Click</button>
        </div>
    )

}

export  default  Page