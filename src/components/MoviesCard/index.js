import { Image, TouchableOpacity, StyleSheet } from "react-native"


export const MoviesCard = (props) => {
    return(
        <TouchableOpacity>
            <Image style={styles.img} source={props.movieURL} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    img: {
        marginRight: 20,
    },
});