import {Badge, Button, Icon} from "../../components";


const GenreBadge = (genreIds ) => {

    console.log('in bage');
    console.log(genreIds );

    return (
        <div>

            {genreIds.genres.map(id => (

                <Button key={id} style={{ marginRight: '20px' }}>
                    <Icon name="inbox" />
                    {id}
                    <Badge circle alert value={id} />
                </Button>
            ))}

        </div>


    );

}

export {GenreBadge};