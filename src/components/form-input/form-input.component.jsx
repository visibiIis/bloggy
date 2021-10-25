import {
	FormGroupContainer,
	FormInputLabel,
	FormInputContainer,
	FormAreaContainer,
} from "./form-input.style";

export const FormInput = ({
	area = false,
	handleChange,
	label,
	...otherProps
}) => (
	<FormGroupContainer>
		{label ? (
			<FormInputLabel length={otherProps.value.length}>
				{label}
			</FormInputLabel>
		) : null}
		{area ? (
			<FormAreaContainer onChange={handleChange} {...otherProps} />
		) : (
			<FormInputContainer onChange={handleChange} {...otherProps} />
		)}
	</FormGroupContainer>
);
