import React from "react";
import { Card, Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

const ProfilComponent = ({ fullName, bio, profession }) => {
	const handelName = (e) => alert(e);
	return (
		<div style={{ paddingTop: "30px" }}>
			<Card
				style={{
					width: "18rem",
					backgroundColor: "beige",
					textAlign: "center",
					margin: "auto",
				}}
			>
				<Card.Img variant="top" src="SALIMF.jpg" />
				<Card.Body>
					<Card.Title>{fullName}</Card.Title>
					<Card.Text>{bio}</Card.Text>
					<Card.Text> {profession} </Card.Text>
					<Button
						variant="primary"
						onClick={() => handelName(fullName)}
					>
						Click me
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
};
ProfilComponent.propTypes = {
	fullName: propTypes.string,
	profession: propTypes.string,
	bio: propTypes.string,
};
ProfilComponent.defaultProps = {
	fullName: "Foulen foulani ",
	bio: "hahahaha",
	profession: "store manager",
};
export default ProfilComponent;
