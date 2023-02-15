import "./index.css";
const Sform = ()=>{
    return(
        <form className="sform">
            <table>
            <tr className="s_hor_inp">
                <th>Age:</th>
                <td><input type="number"></input></td>
                <td>to</td>
                <td><input type="number"></input></td>
            </tr>
            <tr className="s_hor_inp">
                <th>Height:</th>
                <td><input type="number"></input></td>
                <td>to</td>
                <td><input type="number"></input></td>
            </tr>
            </table>
            <div className="s_ver_inp">
                <h3>Maritial Status</h3>
                <select>
                    <option>Single</option>
                    <option>Widowed</option>
                    <option>Divorced</option>
                </select>
            </div>
            <div className="s_ver_inp">
                <h3>Mother Tongue</h3>
                <select>
                    <option>Single</option>
                    <option>Widowed</option>
                    <option>Divorced</option>
                </select>
            </div>
            <div className="s_ver_inp">
                <h3>Religion</h3>
                <select>
                    <option>Single</option>
                    <option>Widowed</option>
                    <option>Divorced</option>
                </select>
            </div>
            <div className="s_ver_inp">
                <h3>City</h3>
                <input type="text"/>
            </div>

            <input type="submit" className="sform_button"></input>

        </form>
    )
}

export default Sform;