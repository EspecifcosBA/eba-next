import { forwardRef, ReactElement } from 'react';

type InputProps = {
  label: string,
  name: string,
  type?: 'text' | 'number' | 'email',
  children?: ReactElement,
  tag?: 'input' | 'textarea',
};

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(({ tag = 'input', label, type = 'text', children, ...props }, ref) => {
  const Tag = tag;
  return (
    <>
      <div className="input">
        {/* @ts-ignore */}
        <Tag type={type} className="input__field" placeholder={label} {...props} ref={ref}/>
        <label className="input__label">
          { label }
        </label>
        { children }
      </div>
      <style jsx>{`
        .input {
          position: relative;
          padding: 15px 0 0;
          margin-top: 1rem;
        }
        .input__field {
          font-family: inherit;
          width: 100%;
          border: 0;
          border-bottom: 1px solid var(--secondaryColor);
          outline: 0;
          font-size: 1rem;
          padding: 7px 0;
          background: transparent;
          transition: border-color 0.5s;
        }
        .input__field::placeholder {
          color: transparent;
        }
        .input__field:placeholder-shown ~ .input__label {
          font-size: 1rem;
          cursor: text;
          top: 20px;
        }

        .input__label {
          position: absolute;
          top: 0;
          display: block;
          transition: 0.2s;
          font-size: 0.8rem;
          color: var(--secondaryDarkColor);
          user-select: none;
          pointer-events: none;
        }
        
        .input__field:focus {
          padding-bottom: 6px;
          border-width: 2px;
          border-image: linear-gradient(to right, var(--primaryColor), var(--primaryLightColor));
          border-image-slice: 1;
        }
        .input__field:focus ~ .form__label {
          position: absolute;
          top: 0;
          display: block;
          transition: 0.5s;
          font-size: 1rem;
          color: var(--secondaryDarkColor);
        }
        
        /* reset input */
        .input__field:required, .input__field:invalid {
          box-shadow: none;
        }


      `}</style>
    </>
  );
});

export default Input;