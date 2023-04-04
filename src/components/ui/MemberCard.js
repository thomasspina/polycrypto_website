import classes from './MemberCard.module.css';

function MemberCard(props) {
    const member = props.profile;

    return (
        <div className={classes.profileCard}>
            <div className={classes.profilePicture}>
                <img src={require('../../img/members/' + member.image)} alt={member.name} />
            </div>
            
            <div className={classes.cardName}>
                <p className={classes.name}>{member.name}</p>
                <p className={classes.role}>{member.role}</p>
            </div>
        </div>
    );
}

export default MemberCard;