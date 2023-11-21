import Butt from './Butt'
function Shoop_Bag(props) {
  return (
    <div>
    <table>
    <tr>
    <td>
    <img src={props.img} style={{width:"100px" ,height:"100px",align:"center"}}/>
    </td>
    <td>
          <p>{props.name}</p>
    </td>
    <td>
    <Butt/>
    </td>
    <td>
    <p>{props.amnt}</p>
    </td>
    </tr>
    </table>
            </div>
  );
}
export default Shoop_Bag;
