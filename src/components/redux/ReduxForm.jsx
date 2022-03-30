import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";

import { PropTypes } from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loadCharacters } from "../../redux/actions/charactersActions";

export const ReduxForm = ({ characters, loadCharacters }) => {
	const [items, setItems] = useState(characters);
	const [loaded, setLoaded] = useState(false);

    debugger;
	useEffect(() => {
		if (!loaded) {
			loadCharacters();
			setLoaded(true);
		}
		setItems(
			characters.map((character) => (
				<TableRow key={character.id}>
					<TableCell>{character.name}</TableCell>
					<TableCell>{character.status}</TableCell>
					<TableCell>{character.gender}</TableCell>
					<TableCell>{character.species}</TableCell>
				</TableRow>
			))
		);
		return () => {
			console.log(characters);
		};
	}, [characters, loaded]);

	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow sx={{ borderBottomWidth: 2 }}>
						<TableCell>Character</TableCell>
						<TableCell>Status</TableCell>
						<TableCell>Gender</TableCell>
						<TableCell>Species</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>{items}</TableBody>
			</Table>
		</TableContainer>
	);
};

ReduxForm.propTypes = {
	characters: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
	characters: state.characters,
});
function mapDispatchToProps(dispatch) {
	return {
		loadCharacters: bindActionCreators(loadCharacters, dispatch),
	};
}
// const mapDispatchToProps = {
// 	loadCharacters: loadCharacters,
// };

export default connect(mapStateToProps, mapDispatchToProps)(ReduxForm);
