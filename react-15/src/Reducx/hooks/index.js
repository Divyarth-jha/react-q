import { useDispatch, useSelector } from 'react-redux'

const dispatch = useDispatch()

const users = useSelector((state) => state.counter)