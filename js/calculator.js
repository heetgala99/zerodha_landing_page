export const onCalculate = () => {

    // get all the values
    const capital = parseFloat(document.getElementById('capital').value);
    const years = document.getElementById('years').value;
    const interestRate = document.getElementById('interest-rate').value;
    const simpleInterestChecked = document.getElementById('simple-interest').checked;

    let interest = 0;

    // Perform calculations based on the user input
    if (simpleInterestChecked) {
        interest = (capital * years * (interestRate / 100)).toFixed(2);
    } else {
        interest = ((capital * Math.pow((1 + (interestRate / 100)), years)) - capital).toFixed(2);
    }

    // total compensation
    const totalCompensation = capital + interest;

    // display the interest calculated
    document.getElementById('output-interest').innerText = `Rs ${interest}`;

    // display this result to the output-value id
    document.getElementById('output-value').innerText = `Rs ${totalCompensation}`;
};