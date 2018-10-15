import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

//search "bar" should only be responsible for sending GET request
export default function Searchbar() {
	return (
		<Formik
			initialValues={{ name: '', type: '', color: '' }}
			onSubmit={values => {
				console.log(values);
			}}
		>
			{({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
				<form onSubmit={handleSubmit}>
					<input
						type="name"
						name="name"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.name}
					/>
					{/* {errors.email && touched.email && errors.email} */}
					<input
						type="type"
						name="type"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.type}
					/>
					{/* {errors.password && touched.password && errors.password} */}
					<input
						type="text"
						name="color"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.color}
					/>
					<button type="submit" disabled={isSubmitting}>
						Submit
					</button>
				</form>
			)}
		</Formik>
	);
}
