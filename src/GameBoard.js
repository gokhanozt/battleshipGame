const GameBoard = (props) => {
  const firstRow = [
    {
      cols: "A",
      class: "column",
      rows: "0",
    },
    {
      cols: "B",
      class: "column",
      rows: "1",
    },
    {
      cols: "C",
      class: "column",
      rows: "2",
    },
    {
      cols: "D",
      class: "column",
      rows: "3",
    },
    {
      cols: "E",
      class: "column",
      rows: "4",
    },
    {
      cols: "F",
      class: "column",
      rows: "5",
    },
    {
      cols: "G",
      class: "column",
      rows: "6",
    },
    {
      cols: "H",
      class: "column",
      rows: "7",
    },
    {
      cols: "I",
      class: "column",
      rows: "8",
    },
    {
      cols: "J",
      class: "column",
      rows: "9",
    },
  ];
  const handleTableClicked = (row, column) => {
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const clickLocation = alphabet[column] + row;

    props.handleClick(clickLocation);
  };

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td className="corner"></td>
            {firstRow.map((row, index) => (
              <td key={index} className={row.class}>
                {row.cols}
              </td>
            ))}
          </tr>
          {firstRow.map((row, index1) => (
            <tr key={index1} className={row.class}>
              <td className="n">{index1}</td>
              {firstRow.map((row, index) => (
                <td
                  key={index}
                  id={index1.toString() + index.toString()}
                  onClick={() => handleTableClicked(index1, index)}
                ></td>
              ))}
            </tr>
          ))}

          {/* <tr>
            <td className="n">0</td>
            {firstRow.map((row, index) => (
              <td key={index} id={`0` + index}></td>
            ))}
          </tr> */}

          {/* <tr>
            <td className="n">0</td>
            <td id="00"></td>
            <td id="01"></td>
            <td id="02"></td>
            <td id="03"></td>
            <td id="04"></td>
            <td id="05"></td>
            <td id="06"></td>
            <td id="07"></td>
            <td id="08"></td>
            <td id="09"></td>
          </tr>
          <tr>
            <td className="n">1</td>
            <td id="10"></td>
            <td id="11"></td>
            <td id="12"></td>
            <td id="13"></td>
            <td id="14"></td>
            <td id="15"></td>
            <td id="16"></td>
            <td id="17"></td>
            <td id="18"></td>
            <td id="19"></td>
          </tr>
          <tr>
            <td className="n">2</td>
            <td id="20"></td>
            <td id="21"></td>
            <td id="22"></td>
            <td id="23"></td>
            <td id="24"></td>
            <td id="25"></td>
            <td id="26"></td>
            <td id="27"></td>
            <td id="28"></td>
            <td id="29"></td>
          </tr>
          <tr>
            <td className="n">3</td>
            <td id="30"></td>
            <td id="31"></td>
            <td id="32"></td>
            <td id="33"></td>
            <td id="34"></td>
            <td id="35"></td>
            <td id="36"></td>
            <td id="37"></td>
            <td id="38"></td>
            <td id="39"></td>
          </tr>
          <tr>
            <td className="n">4</td>
            <td id="40"></td>
            <td id="41"></td>
            <td id="42"></td>
            <td id="43"></td>
            <td id="44"></td>
            <td id="45"></td>
            <td id="46"></td>
            <td id="47"></td>
            <td id="48"></td>
            <td id="49"></td>
          </tr>
          <tr>
            <td className="n">5</td>
            <td id="50"></td>
            <td id="51"></td>
            <td id="52"></td>
            <td id="53"></td>
            <td id="54"></td>
            <td id="55"></td>
            <td id="56"></td>
            <td id="57"></td>
            <td id="58"></td>
            <td id="59"></td>
          </tr>
          <tr>
            <td className="n">6</td>
            <td id="60"></td>
            <td id="61"></td>
            <td id="62"></td>
            <td id="63"></td>
            <td id="64"></td>
            <td id="65"></td>
            <td id="66"></td>
            <td id="67"></td>
            <td id="68"></td>
            <td id="69"></td>
          </tr>
          <tr>
            <td className="n">7</td>
            <td id="70"></td>
            <td id="71"></td>
            <td id="72"></td>
            <td id="73"></td>
            <td id="74"></td>
            <td id="75"></td>
            <td id="76"></td>
            <td id="77"></td>
            <td id="78"></td>
            <td id="79"></td>
          </tr>
          <tr>
            <td className="n">8</td>
            <td id="80"></td>
            <td id="81"></td>
            <td id="82"></td>
            <td id="83"></td>
            <td id="84"></td>
            <td id="85"></td>
            <td id="86"></td>
            <td id="87"></td>
            <td id="88"></td>
            <td id="89"></td>
          </tr>
          <tr>
            <td className="n">9</td>
            <td id="90"></td>
            <td id="91"></td>
            <td id="92"></td>
            <td id="93"></td>
            <td id="94"></td>
            <td id="95"></td>
            <td id="96"></td>
            <td id="97"></td>
            <td id="98"></td>
            <td id="99"></td>
          </tr> */}
        </tbody>
      </table>
    </>
  );
};

export default GameBoard;
