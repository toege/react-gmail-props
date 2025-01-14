import Email from './EmailComponent';

function Emails( { filteredEmails, toggleRead, toggleStar, setDisplayEmail} ) {
    return (  
<main className="emails">
        <ul>
          {filteredEmails.map((email, index) => (
            < Email
                key={index}
                email={email}
                toggleRead={toggleRead}
                toggleStar={toggleStar}
                setDisplayEmail={setDisplayEmail}
            />

          ))}
        </ul>
      </main>
    );
}

export default Emails;