export default function Progress() {
    const summarys = [
        {
            id:"strom",
            max:100,
            value:70
        }
        ,
        {
            id: "gas",
            max: 100,
            value: 75
        }
        ,
        {
            id: "wasser",
            max: 100,
            value: 60
        }
    ]

    return (
        <div className="progress-container">
                {summarys.map(summary => {
                    return (
                        <div key={summary['id']} className="wrap">
                            <label htmlFor={summary['id']}>{summary['id']}</label>
                            <div>{summary['value'] + '%'}</div>
                            <progress id={summary['id']} max={summary['max']} value={summary['value']}> {summary['value']} + % </progress>    
                        </div>
                    )
                })} 
        </div>
    )
}