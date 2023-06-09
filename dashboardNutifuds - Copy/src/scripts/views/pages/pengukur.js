import "../../../styles/pengukur.css"
const pengukur = {
  async render() {
    
    return `
    <h1 class="h1_pengukur">BMI Calculator</h1>
    <div class="wrapper">
    <p class="p_pengukur">Tinggi Dalam CM:
        <input type="text" id="height" placeholder="masukkan tinggi" class="input_pengukur"><br><span id="height_error"></span>
    </p>

    <p class="p_pengukur">Berat Dalam KG:
        <input type="text" id="weight" placeholder="masukkan berat badan" class="input_pengukur"><br><span id="weight_error"></span>
    </p>

    <button id="btn" class="button_pengukur">Hitung</button>
    <p id="output" class="p_pengukur"></p>
</div>
    `;
  },
 
  async afterRender() {
    let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status=false, weight_status=false;

    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = 'mohon masukkan tinggi yang benar';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'mohon masukkan nilai berat yang benar';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }

    if(height_status && weight_status){
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi < 18.6){
            result.innerHTML = 'Berat anda dibawah normal : ' + bmi;
        }else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = 'Normal : ' + bmi;
        }else{
            result.innerHTML = 'Berat anda diatas normal : ' + bmi;
        }
    }else{
        alert('The form has errors');
        result.innerHTML = '';
    }
});
  },
};
 
export default pengukur;