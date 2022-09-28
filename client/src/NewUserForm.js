import React, { useState } from "react"

const NewUserForm = () => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [avatar, setAvatar] = useState(null)

	const handleSubmit = (e) => {
		e.preventDefault()
		let userData = new FormData()
		userData.append("username", name)
		userData.append("email", email)
		userData.append("avatar", avatar)
		const postReqObj = {
			method: "POST",
			headers: {
				Accepts: "application/json",
			},
			// body: JSON.stringify({ name, email }),
			body: userData,
		}
		fetch("/users", postReqObj)
			.then((r) => r.json())
			.then((data) => {
				console.log(data)
			})
	}

	const onAvatarAdded = (e) => {
		const targetAvatar = e.target.files[0]
		console.log(targetAvatar)
		setAvatar(targetAvatar)
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Name
					<input type="text" onChange={(e) => setName(e.target.value)} />
				</label>
				<label>
					Email
					<input type="text" onChange={(e) => setEmail(e.target.value)} />
				</label>
				<label>
					AVATAR
					<input type="file" onChange={onAvatarAdded} />
				</label>
				<input type="submit" value="SUBMIT" />
			</form>
		</div>
	)
}

export default NewUserForm
