import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const Profile = () => {
	const nav = useNavigate()
	const params = useParams()
	const [user, setUser] = useState({})
	const [avatar, setAvatar] = useState({})

	useEffect(() => {
		fetch("/users/" + params["id"])
			.then((r) => r.json())
			.then((data) => {
				setUser(data.user)
				setAvatar(data.avatar)
			})
	}, [])
	return (
		<>
			<h1>{user.username}</h1>
			<h2>{user.email}</h2>
			<img src={avatar} alt="nah" />
			{/* <img src={user.image_url} alt="nah" /> */}
		</>
	)
}

export default Profile
