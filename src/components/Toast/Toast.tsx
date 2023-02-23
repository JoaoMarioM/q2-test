import ToastBase from 'react-native-toast-message'

import { ContainerToast, Text } from './Toast.styles'

export const Toast = () => {
	const colors: any = {
		error: "#e74c3c",
		success: "#5CE673",
		warn: "#FFAE10"
	};

	return (
		<ToastBase
			topOffset={0}
			config={{

				error: ({ text1, type }) => (
					<ContainerToast color={colors[type]}>
						<Text>{text1}</Text>
					</ContainerToast>
				),

				success: ({ text1, type }) => (
					<ContainerToast color={colors[type]}>
						<Text>{text1}</Text>
					</ContainerToast>
				),

				warn: ({ text1, type }) => (
					<ContainerToast color={colors[type]}>
						<Text>{text1}</Text>
					</ContainerToast>
				),
			}}
		/>
	)
}
