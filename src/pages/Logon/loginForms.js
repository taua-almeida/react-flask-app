import React, { useState } from 'react';

import { useForm } from 'react-hook-form';

import { useHistory } from 'react-router-dom';

import Utils from '../../components/Utils';

import {
  UncontrolledAlert,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Button,
  Spinner
} from 'reactstrap';

import api from '../../services/api';

export default function LoginForm() {

  const history = useHistory();

  // Declare react-hooks-form
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => { handleLogin(data); }

  // Declare hooks state
  const [type, setType] = useState('password');
  const [eye, setEye] = useState('fa fa-eye-slash');
  const [emailError, setemailError] = useState(false);
  const [loading, setLoading] = useState(false);

  // See password or not
  function handlePasswordVisibility() {
    if (type === 'password') {
      setType('text');
      setEye('fa fa-eye');
    } else {
      setType('password');
      setEye('fa fa-eye-slash');
    }
  }

  // Api call
  async function handleLogin(data) {
    setLoading(true);
    try {
      setemailError(false);
      const response = await api.post('api/auth/login', data);
      if (response) { setLoading(false); }  
      if (response.data.Authorized) {
        console.log(response)
        localStorage.clear();
        localStorage.setItem('token', response.data.token);
        history.push('/main');
      } else {
        response.data.UnauthorizedError ? setemailError(true) : Utils.alertCatch()
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
      <div>
        {emailError && <UncontrolledAlert color="danger" fade={false}>
          <span className="alert-inner--icon">
            <i className="fa fa-frown-o" />
          </span>{" "}
          <span className="alert-inner--text">
            Invalid e-mail or password
          </span>
        </UncontrolledAlert>}
      </div>
      <FormGroup className={`${!!errors.email && 'has-danger'}`}>
        <InputGroup className="input-group-alternative mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className={`ni ni-email-83 ${!!errors.email && 'text-danger'}`} />
            </InputGroupText>
          </InputGroupAddon>
          <input className="form-control" placeholder="Email" name="email" ref={
            register({
              required: "E-mail is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid e-mail"
              }
            })
          } />
        </InputGroup>
        <small className="text-danger">{errors.email && errors.email.message}</small>
      </FormGroup>
      <FormGroup className={`${!!errors.password && 'has-danger'}`}>
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className={`ni ni-lock-circle-open ${!!errors.password && 'text-danger'}`} />
            </InputGroupText>
          </InputGroupAddon>
          <input className="form-control" placeholder="Password" type={type} autoComplete="off" name="password" ref={
            register({
              required: "Type your password",
            })
          } />
          <InputGroupAddon addonType="append">
            <Button className="btn-icon btn-2" syze="sm" color="secondary" type="button" onClick={() => handlePasswordVisibility()}>
              <span className="btn-inner--icon">
                <i className={eye} />
              </span>
            </Button>
          </InputGroupAddon>
        </InputGroup>
        <small className="text-danger">{errors.password && errors.password.message}</small>
      </FormGroup>
      <div className="custom-control custom-control-alternative custom-checkbox">
        <input
          className="custom-control-input"
          id=" customCheckLogin"
          type="checkbox"
        />
        <label
          className="custom-control-label"
          htmlFor=" customCheckLogin"
        >
          <span>Remember me</span>
        </label>
      </div>
      <div className="text-center pl-5 pr-5">
        {
          loading ?
            <Spinner color="primary" />
            :
            <Button
              className="mt-5"
              color="primary"
              type="submit"
              block
            >
              Sign in
            </Button>
        }

      </div>
    </form>
  );

}