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
  Button
} from 'reactstrap';

import api from '../../services/api';


export default function RegisterForm() {

  const history = useHistory();

  // Declare react-hooks-form
  const { register, handleSubmit, errors, watch } = useForm();
  const onSubmit = (data) => { handleSignup(data); }

  // Declare hooks state
  const [type, setType] = useState('password');
  const [eye, setEye] = useState('fa fa-eye-slash');
  const [duplicate, setDuplicate] = useState(false);

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
  async function handleSignup(data) {
    try {
      delete data.confirmpass;
      setDuplicate(false);
      const response = await api.post('api/auth/create', data);
      if (response.status === 201) {
        history.push('/success');
      } else {
        response.data.UniqueKeyError ? setDuplicate(true) : Utils.alertCatch()
      }
    } catch (err) {
      console.log(err);
    }

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {duplicate && <UncontrolledAlert color="danger" fade={false}>
          <span className="alert-inner--icon">
            <i className="fa fa-frown-o" />
          </span>{" "}
          <span className="alert-inner--text">
            E-mail already in use
          </span>
        </UncontrolledAlert>}
      </div>
      <FormGroup className={`${!!errors.name && 'has-danger'}`}>
        <InputGroup className="input-group-alternative mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className={`ni ni-circle-08 ${!!errors.name && 'text-danger'}`} />
            </InputGroupText>
          </InputGroupAddon>
          <input className={`form-control ${!!errors.name && 'is-invalid'}`} placeholder="Name" type="text" name="name" ref={
            register({
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Must have a bigger name, no?"
              }
            })
          } />
        </InputGroup>
        <small className="text-danger">{errors.name && errors.name.message}</small>
      </FormGroup>
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
              required: "You must have a password",
              minLength: {
                value: 6,
                message: "Must be at least 6 characters long"
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/,
                message: "Must have at least 1 numeric and 1 special character and 1 uppercase character"
              }
            })
          } />
        </InputGroup>
        <small className="text-danger">{errors.password && errors.password.message}</small>
      </FormGroup>
      <FormGroup className={`${!!errors.confirmpass && 'has-danger'}`}>
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className={`ni ni-lock-circle-open ${!!errors.confirmpass && 'text-danger'}`} />
            </InputGroupText>
          </InputGroupAddon>
          <input className="form-control" placeholder="Confirm Password" type={type} autoComplete="off" name="confirmpass" ref={
            register({
              required: "Confirm your password",
              validate: (value) => value === watch('password') || "Password doesn't match"
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
        <small className="text-danger">{errors.confirmpass && errors.confirmpass.message}</small>
      </FormGroup>
      <div className="text-center">
        <Button
          className="mt-4"
          color="primary"
          type="submit"
        >
          Create account
        </Button>
      </div>
    </form>
  );
}