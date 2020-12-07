export default function TeamList(props) {

    return (
        <ul>
            <li>Dominick, Full Stack Web, Dominick743@gmail.com</li>
            {props.teamList.map(teamMember => {
                return <li>{teamMember.name}, {teamMember.role}, {teamMember.email}</li>
            })}
        </ul>
    )
}