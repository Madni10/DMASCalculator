import React, { useRef, useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { couldStartTrivia } from "typescript";

interface Props {}

export const Calculator: React.FC<Props> = ({}) => {
  const [number, setnumber] = useState<string>("");
  const prevNumber = useRef<string>("");
  const currentNumber = useRef<string | undefined>();
  const numArray = useRef<string[]>([]);

  // const numberInput = (num: string) => {
  //     let a = number;
  //     if(!numChange){
  //         prevNumber.current += num;
  //     }
  //     else if(numChange){
  //         currentNumber.current += num;
  //         // let sign = a.includes('/') ? '/' :a.includes('+') ? '+' : a.includes('-') ? '-' : a.includes('X') ? 'X' : '';
  //         // onSignClick(sign);
  //         // currentNumber.current = undefined;
  //     }
  //     else if(prevNumber.current != undefined && currentNumber.current != undefined){
  //         prevNumber.current = currentNumber.current;
  //         currentNumber.current = num;
  //         onSignClick(a[1]);
  //     }

  //     if(a[1] == undefined){
  //          setnumber(num)
  //         }

  // }

  const onButtonPress = (num: string) => {
    let a = number;
    setnumber(a.concat(num));
    prevNumber.current += num;
  };

  // const onClickSign = (sign : string) => {
  //     prevNumber.current
  //     setnumber(prevNumber.current+sign+currentNumber.current);
  // }

  const onSignPress = (num: string) => {
    debugger;
    if (
      parseFloat(numArray.current[numArray.current.length - 1]) <= 9 ||
      numArray.current.length == 0 ||
      (numArray.current[numArray.current.length - 1] !== "/" &&
        numArray.current[numArray.current.length - 1] !== "X" &&
        numArray.current[numArray.current.length - 1] !== "+" &&
        numArray.current[numArray.current.length - 1] !== "-") ||
      prevNumber.current != "" 
    ) {
      // if(num!="/" && num!="X" && num!="+" && num!="-" && numArray.current.length == 0){
        let a = number;
        if (prevNumber.current != "") numArray.current.push(prevNumber.current);
        if (num != "") numArray.current.push(num);
          prevNumber.current = "";
          setnumber(a.concat(num));
        }else if (num == "") {
          numArray.current.push(prevNumber.current);
      }
  // }
  };
  const onClear = () => {
    let s = number;
    setnumber(s.substring(0, s.length - 1));

    let valueString = numArray.current[numArray.current.length - 1];
    let value = valueString.slice(0, -1);
    numArray.current.splice(numArray.current.length - 1, 1, value);
  };

  const onClearAll = () => {
    setnumber("");
    numArray.current = [];
  };

  const onCalculation = () => {
    onSignPress("");

    if (isNaN(parseFloat(numArray.current[numArray.current.length - 1]))) {
      
      numArray.current.splice(numArray.current.length - 1, 1);
    }

    let tempArr = numArray.current;

    //Division
    while(tempArr.find((item,index)=>item == "/") != undefined){
 
      tempArr.find((item,index)=>{
        if(item == "/"){
          let answer = calculation(
            item,
            parseFloat(numArray.current[index - 1]),
            parseFloat(numArray.current[index + 1])
          );

          tempArr.splice(index - 1, 3, answer + "");

          console.log(tempArr);
        }
      })
      
    };

    //Multiplication
    while(tempArr.find((item,index)=>item == "X") != undefined){
 
      tempArr.find((item,index)=>{
        if(item == "X"){
          let answer = calculation(
            item,
            parseFloat(numArray.current[index - 1]),
            parseFloat(numArray.current[index + 1])
          );

          tempArr.splice(index - 1, 3, answer + "");

          console.log(tempArr);
        }
      })
      
    };

    //Addition
    while(tempArr.find((item,index)=>item == "+") != undefined){
 
      tempArr.find((item,index)=>{
        if(item == "+"){
          let answer = calculation(
            item,
            parseFloat(numArray.current[index - 1]),
            parseFloat(numArray.current[index + 1])
          );

          tempArr.splice(index - 1, 3, answer + "");

          console.log(tempArr);
        }
      })
      
    };

    //Subtraction
    while(tempArr.find((item,index)=>item == "-") != undefined){
 
      tempArr.find((item,index)=>{
        if(item == "-"){
          let answer = calculation(
            item,
            parseFloat(numArray.current[index - 1]),
            parseFloat(numArray.current[index + 1])
          );

          tempArr.splice(index - 1, 3, answer + "");

          console.log(tempArr);
        }
      })
      
    };

    //************************************************************************Working********************************************************************* */
    // while (tempArr.length != 1) {

    //   numArray.current.map((item, index) => {
    //     if (item == "/" || item == "X" || item == "+" || item == "-") {
    //       let answer = calculation(
    //         item,
    //         parseFloat(numArray.current[index - 1]),
    //         parseFloat(numArray.current[index + 1])
    //       );

    //       tempArr.splice(index - 1, 3, answer + "");

    //       console.log(tempArr);
    //     }
    //   });
    // }
    //************************************************************************Working********************************************************************* */

    prevNumber.current = "";
    setnumber(tempArr[0]);

    // console.log(numArray);
  };

  const calculation = (sign: string, num1: number, num2: number) => {
    switch (sign) {
      case "/":
        if (num1 != 0 && num2 != 0) {
          let answer = num1 / num2;
          prevNumber.current = answer.toString();
          console.log(answer);
          return answer;
        }
        else{
          let answer = 0;
          return answer;
        }
        // currentNumber.current = undefined;
        // setnumber(answer.toString());

        break;

      case "+":
        if (num1 >= 0 && num2 >= 0) {
          let answer = num1 + num2;
          prevNumber.current = answer.toString();
          console.log(answer);
          return answer;

          // currentNumber.current = undefined;
          // setnumber(answer.toString());
        }
        break;
      case "X":
        if (num1 != 0 && num2 != 0) {
          let answer = num1 * num2;
          prevNumber.current = answer.toString();
          console.log(answer);
          return answer;
        }
        else{
          let answer = 0;
          return answer;
        }
        // currentNumber.current = undefined;
        // setnumber(answer.toString());

        break;
      case "-":
        if (num1 > 0 && num2 > 0) {
          let answer = num1 - num2;
          prevNumber.current = answer.toString();
          console.log(answer);
          return answer;

          // currentNumber.current = undefined;
          // setnumber(answer.toString());
        }
        break;
      default:
        console.log("default");
        return 0;
        break;
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      width="50%"
      padding="6px 12px"
    >
      <Box display="flex">
        <TextField
          value={number}
          id="number"
          variant="filled"
          disabled
          fullWidth
        />
      </Box>
      {/* Line one */}
      <Box display="flex" flexDirection="row" padding="10px">
        <Box display="flex" width="25%" padding="10px">
          <Button
            variant="contained"
            color="secondary"
            onClick={() => onClearAll()}
            fullWidth
          >
            C
          </Button>
        </Box>
        <Box display="flex" width="25%" padding="10px">
          <Button
            variant="contained"
            color="secondary"
            onClick={() => onClear()}
            fullWidth
          >
            CE
          </Button>
        </Box>
        <Box display="flex" width="25%" padding="10px">
          <Button variant="contained" color="primary" fullWidth>
            %
          </Button>
        </Box>
        <Box display="flex" width="25%" padding="10px">
          <Button
            variant="contained"
            color="primary"
            onClick={() => onSignPress("/")}
            fullWidth
          >
            /
          </Button>
        </Box>
      </Box>
      {/* Line Two */}
      <Box display="flex" flexDirection="row" padding="10px">
        <Box display="flex" width="25%" padding="10px">
          <Button
            variant="contained"
            color="primary"
            onClick={() => onButtonPress("7")}
            fullWidth
          >
            7
          </Button>
        </Box>
        <Box display="flex" width="25%" padding="10px">
          <Button
            variant="contained"
            color="primary"
            onClick={() => onButtonPress("8")}
            fullWidth
          >
            8
          </Button>
        </Box>
        <Box display="flex" width="25%" padding="10px">
          <Button
            variant="contained"
            color="primary"
            onClick={() => onButtonPress("9")}
            fullWidth
          >
            9
          </Button>
        </Box>
        <Box display="flex" width="25%" padding="10px">
          <Button
            variant="contained"
            color="primary"
            onClick={() => onSignPress("X")}
            fullWidth
          >
            X
          </Button>
        </Box>
      </Box>
      {/* Line Three */}
      <Box display="flex" flexDirection="row" padding="10px">
        <Box display="flex" width="25%" padding="10px">
          <Button
            variant="contained"
            color="primary"
            onClick={() => onButtonPress("4")}
            fullWidth
          >
            4
          </Button>
        </Box>
        <Box display="flex" width="25%" padding="10px">
          <Button
            variant="contained"
            color="primary"
            onClick={() => onButtonPress("5")}
            fullWidth
          >
            5
          </Button>
        </Box>
        <Box display="flex" width="25%" padding="10px">
          <Button
            variant="contained"
            color="primary"
            onClick={() => onButtonPress("6")}
            fullWidth
          >
            6
          </Button>
        </Box>
        <Box display="flex" width="25%" padding="10px">
          <Button
            variant="contained"
            color="primary"
            onClick={() => onSignPress("-")}
            fullWidth
          >
            -
          </Button>
        </Box>
      </Box>
      {/* Line Four */}
      <Box display="flex" flexDirection="row" padding="10px">
        <Box display="flex" width="25%" padding="10px">
          <Button
            variant="contained"
            color="primary"
            onClick={() => onButtonPress("1")}
            fullWidth
          >
            1
          </Button>
        </Box>
        <Box display="flex" width="25%" padding="10px">
          <Button
            variant="contained"
            color="primary"
            onClick={() => onButtonPress("2")}
            fullWidth
          >
            2
          </Button>
        </Box>
        <Box display="flex" width="25%" padding="10px">
          <Button
            variant="contained"
            color="primary"
            onClick={() => onButtonPress("3")}
            fullWidth
          >
            3
          </Button>
        </Box>
        <Box display="flex" width="25%" padding="10px">
          <Button
            variant="contained"
            color="primary"
            onClick={() => onSignPress("+")}
            fullWidth
          >
            +
          </Button>
        </Box>
      </Box>
      {/* Line Five */}
      <Box display="flex" flexDirection="row" padding="10px">
        <Box display="flex" width="25%" padding="10px">
          <Button
            variant="contained"
            color="primary"
            onClick={() => onButtonPress("0")}
            fullWidth
          >
            0
          </Button>
        </Box>
        <Box display="flex" width="25%" padding="10px">
          <Button
            variant="contained"
            color="primary"
            onClick={() => onButtonPress(".")}
            fullWidth
          >
            .
          </Button>
        </Box>

        <Box display="flex" width="50%" padding="10px">
          <Button
            variant="contained"
            color="primary"
            onClick={() => onCalculation()}
            fullWidth
          >
            =
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Calculator;
