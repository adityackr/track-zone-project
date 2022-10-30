import { useEffect } from 'react';
import { TIMEZONE_OFFSET } from '../../../constants/timezone';
import useForm from '../../../hooks/useForm';
import { getOffset } from '../../../utils/timezone';

const ClockForm = ({ values, handleClock, title = true, edit = false }) => {
	const {
		formState: state,
		handleBlur,
		handleChange,
		handleFocus,
		handleSubmit,
	} = useForm({ init: values, validate: true });

	useEffect(() => {
		if (TIMEZONE_OFFSET[state.timezone.value]) {
			values = {
				...values,
				offset: TIMEZONE_OFFSET[state.timezone.value],
			};
		}
	}, [state.timezone.value]);

	const cb = ({ values }) => {
		handleClock(values);
	};

	return (
		<form onSubmit={(e) => handleSubmit(e, cb)}>
			<div>
				<label htmlFor="title">Enter Title</label>
				<input
					type="text"
					id="title"
					name="title"
					value={state.title.value}
					onChange={handleChange}
					disabled={!title}
					onFocus={handleFocus}
					onBlur={handleBlur}
				/>
			</div>
			<div>
				<label htmlFor="timezone">Enter Timezone</label>
				<select
					id="timezone"
					name="timezone"
					value={state.timezone.value}
					onChange={handleChange}
				>
					<option value="GMT">GMT</option>
					<option value="UTC">UTC</option>
					<option value="PST">PST</option>
					<option value="EST">EST</option>
					<option value="EDT">EDT</option>
					<option value="BST">BST</option>
					<option value="MST">MST</option>
				</select>
			</div>
			{(state.timezone.value === 'GMT' || state.timezone.value === 'UTC') && (
				<div>
					<label htmlFor="offset">Enter Offset</label>
					<select
						id="offset"
						name="offset"
						value={state.offset.value / 60}
						onChange={handleChange}
					>
						{getOffset().map((offset) => (
							<option key={offset} value={offset}>
								{offset}
							</option>
						))}
					</select>
				</div>
			)}
			<button>{edit ? 'Update' : 'Create'}</button>
		</form>
	);
};

export default ClockForm;
