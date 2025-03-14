
const DynamicList = () => {

    const Persons = [
        {id:1,name:'John'}, 
        {id:2,name: 'Jane'}, 
        {id:3,name:'Doe'}, 
        {id:4,name:'Smith'}, 
        {id:5,name:'Alex'}, 
        {id:6,name:'Jack'}, 
        {id:7,name:'Jill'}, 
        {id:8,name:'Sara'}, 
        {id:9,name:'Tom'},
        {id:10,name:'Jerry'}
    ];

    return (
        <>
            <h2>Dynamic List</h2>
            {Persons.length === 0 ? 
            (<p>No Person Found</p>) : 
            (<ul>
                {Persons.map(
                    (Person) => (
                    <li key={Person.id}> Name: {Person.name}</li>
                ))}
            </ul>
          )}
            
        </>
    );


}
export default DynamicList;