import React from 'react';
import { useForm } from 'react-hook-form';
import classes from './Reg.module.css';

const Reg = () => {
  const {
    register, 
    handleSubmit,
    watch, 
    formState: { errors }, 
  } = useForm();

  const onSubmit = (data) => {
    alert(
      `Регистрация успешна!\n
    Имя пользователя: ${data.username}
    Email: ${data.email}
    Пароль: ${data.password}`
    )};

  const password = watch('password');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
     
      <div className={classes.formCell}>
        <label>Имя пользователя: </label>
        <input className={classes.inp}
          type="text"
          {...register('username', { required: 'Введите имя', minLength: { value: 3, message: 'Минимум 3 символа' } })}
        />
      </div>
      {errors.username && <p className={classes.err}>{errors.username.message}</p>}
      
      <div className={classes.formCell}>
        <label>Email: </label>
        <input className={classes.inp}
          type="email"
          {...register('email', { required: 'Введите Email', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Введите корректный email' } })}
        />
      </div>
      {errors.email && <p className={classes.err}>{errors.email.message}</p>}
     
      <div className={classes.formCell}>
        <label>Пароль: </label>
        <input className={classes.inp}
          type="password"
          {...register('password', { required: 'Пароль обязателен', pattern: { value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{10,25}$/, message: "Пароль должен содержать от 10 до 25 символов, как минимум одну прописную букву, одну строчную букву, одну цифру и один специальный символ (!@#$%^&*)!" } })}
        />
      </div>
      {errors.password && <p className={classes.err}>{errors.password.message}</p>}

      <div className={classes.formCell}>
          <label>Повтор пароля: </label>
          <input  className={classes.inp}
          type="password" 
          {...register('repeatPassword', {required: 'Повторите пароль', 
            validate: value =>
            value === password || "Пароли не совпадают" })}
          />
      </div>
      {errors.repeatPassword && <p className={classes.err}>{errors.repeatPassword.message}</p>}
      
      <button className={classes.btn} type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default Reg;
