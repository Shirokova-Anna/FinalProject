import React, { useState } from 'react';
import classes from './Bike.module.css';

function Bike(props) {
    const [formData, setFormData] = useState({
        name: '',
        own: '',
        km: '',
        exp: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Имя обязательно';
        } else if (formData.name.length > 20) {
            newErrors.name = 'Имя не должно превышать 20 символов';
        }

        if (!formData.own) {
            newErrors.own = 'Укажите срок владения';
        } else if (formData.own < 0 || formData.own > 100) {
            newErrors.own = 'Срок владения должен быть от 0 до 100 лет';
        }

        if (!formData.km) {
            newErrors.km = 'Укажите пробег';
        } else if (formData.km < 1) {
            newErrors.km = 'Пробег должен быть не меньше 1 км';
        }

        if (!formData.exp.trim()) {
            newErrors.exp = 'Опишите ваш опыт';
        }

        return newErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            alert(`Отправлено:\nИмя: ${formData.name}\nТип велосипеда: ${props.name}\nСрок владения: ${formData.own} лет\nПробег: ${formData.km} км\nОпыт: ${formData.exp}`);
            setFormData({ name: '', own: '', km: '', exp: '' });
        }
    };

    return (
        <div className={classes.img1}>
            <h1>{props.name}</h1>
            <img src={props.image} className={classes.img} alt="bike" />
            <div>{props.description}</div>

            <form className={classes.reviewForm} onSubmit={handleSubmit}>
                <h1>Отзыв</h1>

                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    className={`${classes.inp}`}
                    placeholder="Имя"
                    onChange={handleChange}
                />
                {errors.name && <div className={classes.error}>{errors.name}</div>}

                <input
                    type="number"
                    name="own"
                    value={formData.own}
                    className={`${classes.inp}`}
                    placeholder="Срок владения (лет)"
                    onChange={handleChange}
                />
                {errors.own && <div className={classes.error}>{errors.own}</div>}

                <input
                    type="number"
                    name="km"
                    value={formData.km}
                    className={`${classes.inp}`}
                    placeholder="Пробег (км)"
                    onChange={handleChange}
                />
                {errors.km && <div className={classes.error}>{errors.km}</div>}

                <textarea
                    name="exp"
                    value={formData.exp}
                    className={`${classes.inp} ${classes.area}`}
                    placeholder="Опишите ваш опыт владения"
                    onChange={handleChange}
                />
                {errors.exp && <div className={classes.error}>{errors.exp}</div>}

                <button type="submit" className={`${classes.inp}`}>
                    Отправить
                </button>
            </form>
        </div>
    );
}

export default Bike;
