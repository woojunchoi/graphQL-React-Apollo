import React , {Component} from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import {Link} from 'react-router'
import query from '../queries/fetchSong'

class SongList extends Component {
    constructor() {
        super()
    }

    renderSongs = () =>  {
        return this.props.data.songs.map((song) => {
            return (
                <li key={song.id} className ='collection-item'>
                    {song.title}
                </li>   
            )
        })
    }

    render() {
        if(this.props.data.loading) {
            return(
                <div>loading..</div>
            )
        }
        return(
            <div>
            <ul className='collection'>
                {this.renderSongs()}
            </ul>
            <Link to='/songs/new' className='btn-floating btn-medium red right'>
                <i className='material-icons'>add</i>
            </Link>
            </div>

        )
    }
}

export default graphql(query)(SongList)