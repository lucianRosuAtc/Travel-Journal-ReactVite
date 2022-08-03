import locationMark from '../img/location-mark.png'

export default function Card(props){
    return(
            <div className="card">
                    <img src={props.item.imageUrl} className="card--img"/>

                    <div className='card--content'>
                        <div className='card--location'>
                            <img src={locationMark} className="card--location-mark "/>
                            <p className='card--country'>{props.item.location}</p>
                            <a  href={props.item.googleMapsUrl} className='card--link'>View on Google Maps</a>
                        </div>

                        <h1 className='card--title'>{props.item.title}</h1>
                        <p className='card--date'>{props.item.startDate} - {props.item.endDate}</p>
                        <p className='card--description'>{props.item.description}</p>
                    </div>
            </div>
    )
}