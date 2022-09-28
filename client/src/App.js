import { Route, Routes } from "react-router-dom"
import "./App.css"
import NewUserForm from "./NewUserForm"
import Profile from "./Profile"

function App() {
	return (
		<>
			<Routes>
				<Route element={<Profile />} path="/profile/:id" />
				<Route element={<NewUserForm />} path="new_user" />
			</Routes>
		</>
	)
}

export default App
