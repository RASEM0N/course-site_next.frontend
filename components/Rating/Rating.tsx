import React, {
    DetailedHTMLProps,
    FunctionComponent,
    HTMLAttributes,
    ReactNode,
    useCallback,
    useEffect,
    useState,
    KeyboardEvent,
} from 'react'
import styles from './Rating.module.css'
import StarIcon from './assets/star.svg'
import classNames from 'classnames'

type DivHTMLProps = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>

interface PropsType extends DivHTMLProps {
    setRating?: (rating: number) => void
    isEditable?: boolean
    rating: number
}

export const Rating: FunctionComponent<PropsType> = ({
    isEditable = false,
    rating,
    setRating,
    ...props
}) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

    const constructRating = useCallback(
        (currentRating: number) => {
            const updatedArray = ratingArray.map((_, idx: number) => {
                return (
                    <span
                        className={classNames(styles.star, {
                            [styles.filled]: idx < currentRating,
                            [styles.editable]: isEditable,
                        })}
                        onMouseEnter={() => changeDisplay(idx + 1)}
                        onMouseLeave={() => changeDisplay(rating)}
                        onClick={() => onClick(idx + 1)}
                    >
                        <StarIcon
                            tabIndex={isEditable ? 0 : -1}
                            onKeyDown={(e) => handleSpace(idx + 1, e)}
                        />
                    </span>
                )
            })

            setRatingArray(updatedArray)
        },
        [rating],
    )

    useEffect(() => {
        constructRating(rating)
    }, [rating, constructRating])

    const changeDisplay = (rating: number) => {
        if (!isEditable) {
            return
        }
        constructRating(rating)
    }

    const onClick = (rating: number) => {
        if (!isEditable || !setRating) {
            return
        }
        setRating(rating)
    }

    const handleSpace = (idx: number, e: KeyboardEvent<SVGAElement>) => {
        if (e.code != 'Space' || !setRating || !isEditable) {
            return
        }
        setRating(idx)
    }

    return (
        <div {...props}>
            {ratingArray.map((item: JSX.Element, idx: number) => (
                <span key={idx}>{item}</span>
            ))}
        </div>
    )
}
