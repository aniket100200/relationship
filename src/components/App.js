import React, { useState } from "react";
import '../styles/App.css'

const App = () => {
    const [ans, setAns] = useState("");
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");

    const removeCommonCharacters = (str1, str2) => {
        let arr1 = str1.split('');
        let arr2 = str2.split('');

        for (let i = 0; i < arr1.length; i++) {
            let char = arr1[i];
            let index = arr2.indexOf(char);

            if (index !== -1) {
                arr1.splice(i, 1);
                arr2.splice(index, 1);
                i--;
            }
        }

        let sumOfLength = arr1.length + arr2.length;
        let ans = sumOfLength % 6;
        console.log(arr1,arr2);

        return ans;
    };

    const calculate = () => {
        let ans = input1 && input2 ? removeCommonCharacters(input1, input2) : 6;
        if (ans === 1) {
            setAns("Friends");
        } else if (ans === 2) {
            setAns("Love");
        } else if (ans === 3) {
            setAns("Affection");
        } else if (ans === 4) {
            setAns("Marriage");
        } else if (ans === 5) {
            setAns("Enemy");
        } else if (ans === 0) {
            setAns("Siblings");
        } else {
            setAns("Please Enter valid input");
        }
    };

    const clear = () => {
        setAns("");
        setInput1("");
        setInput2("");
    };

    return (
        <div id="main" style={mainStyle}>
            <form style={formStyle}>
                <input
                    type="text"
                    id="input1"
                    name="input1"
                    placeholder="Enter the First Name."
                    data-testid="input1"
                    onChange={(e) => { setInput1(e.target.value); }}
                    style={inputStyle}
                />
                <input
                    type="text"
                    id="input2"
                    name="input2"
                    placeholder="Enter the Second Name."
                    data-testid="input2"
                    onChange={(e) => { setInput2(e.target.value); }}
                    style={inputStyle}
                />
                <button type="button" onClick={calculate} style={{ ...buttonStyle, backgroundColor: '#007bff' }}>
                    Calculate Relationship Future
                </button>
                <button type="reset" onClick={clear} data-testid="clear" style={{ ...buttonStyle, backgroundColor: '#dc3545' }}>
                    Clear
                </button>
                <h3 data-testid="answer" style={answerStyle}>{ans}</h3>
            </form>
        </div>
    );
};

const mainStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f4f8',
    fontFamily: 'Arial, sans-serif',
};

const formStyle = {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
};

const inputStyle = {
    width: 'calc(100% - 20px)',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
};

const buttonStyle = {
    padding: '10px 20px',
    margin: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    color: '#ffffff',
    transition: 'background-color 0.3s ease',
};

const answerStyle = {
    marginTop: '20px',
    fontSize: '20px',
    color: '#333333',
    fontWeight: 'bold',
};

export default App;
