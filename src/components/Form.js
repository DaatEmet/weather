import React from 'react';


const Form = () => {
    const handleSubmitWeather = event => {
        event.preventDefault();
        const city = event.currentTarget.city.value.trim();
        fetch('http://api.openweathermap.org/data/2.5/weather?q='
            +`${city}`+'&units=metric&appid=6ebaeaa9a3e59d2a1db31ae621f154d1')
            .then(response => response.json())
            .then(data => console.log(data.main))
    }
    return (
        <form onSubmit={handleSubmitWeather}>
            <input type={'text'} name ='city' placeholder={'City'}/>
            <button type='submit'>Get weather</button>
        </form>
    );
};

export default Form;