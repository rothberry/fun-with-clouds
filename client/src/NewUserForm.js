import React, { useState } from "react"

const NewUserForm = () => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
  

	return (
		<div>
			<form>
				<label>
					Name
					<input type="text" />
				</label>
				<label>
					Email
					<input type="text" />
				</label>
				<label>
					Name
					<input type="file" />
				</label>
			</form>
		</div>
	)
}

export default NewUserForm
