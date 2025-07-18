import { useForm, FormProvider } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface ContactFormData {
	name: string;
	email: string;
	project: string;
	message: string;
}

export default function ContactForm() {
	const { t } = useTranslation('contact');
	const methods = useForm<ContactFormData>({
		defaultValues: {
			name: '',
			email: '',
			project: '',
			message: '',
		},
	});

	const onSubmit = (data: ContactFormData) => {
		console.log('Form submitted:', data);
		// Here you would typically send the data to your backend
	};

	return (
		<FormProvider {...methods}>
			<form className="space-y-6" onSubmit={methods.handleSubmit(onSubmit)}>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					<div>
						<label
							htmlFor="name"
							className="text-base-content mb-2 block text-sm font-medium">
							{t('form.name')}
						</label>
						<input
							{...methods.register('name', { required: 'Name is required' })}
							type="text"
							id="name"
							className="input input-bordered w-full"
							placeholder={t('form.name')}
						/>
						{methods.formState.errors.name && (
							<p className="text-error mt-1 text-sm">
								{methods.formState.errors.name.message}
							</p>
						)}
					</div>
					<div>
						<label
							htmlFor="email"
							className="text-base-content mb-2 block text-sm font-medium">
							{t('form.email')}
						</label>
						<input
							{...methods.register('email', {
								required: 'Email is required',
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: 'Invalid email address',
								},
							})}
							type="email"
							id="email"
							className="input input-bordered w-full"
							placeholder={t('form.email')}
						/>
						{methods.formState.errors.email && (
							<p className="text-error mt-1 text-sm">
								{methods.formState.errors.email.message}
							</p>
						)}
					</div>
				</div>

				<div>
					<label
						htmlFor="project"
						className="text-base-content mb-2 block text-sm font-medium">
						{t('form.project')}
					</label>
					<input
						{...methods.register('project', {
							required: 'Project is required',
						})}
						type="text"
						id="project"
						className="input input-bordered w-full"
						placeholder={t('form.project')}
					/>
					{methods.formState.errors.project && (
						<p className="text-error mt-1 text-sm">
							{methods.formState.errors.project.message}
						</p>
					)}
				</div>

				<div>
					<label
						htmlFor="message"
						className="text-base-content mb-2 block text-sm font-medium">
						{t('form.message')}
					</label>
					<textarea
						{...methods.register('message', {
							required: 'Message is required',
						})}
						id="message"
						rows={6}
						className="textarea textarea-bordered w-full resize-none"
						placeholder={t('form.message')}
					/>
					{methods.formState.errors.message && (
						<p className="text-error mt-1 text-sm">
							{methods.formState.errors.message.message}
						</p>
					)}
				</div>

				<button
					type="submit"
					className="btn btn-primary w-full"
					disabled={methods.formState.isSubmitting}>
					{t('form.sendMessage')}
					<svg
						className="h-5 w-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
						/>
					</svg>
				</button>
			</form>
		</FormProvider>
	);
}
