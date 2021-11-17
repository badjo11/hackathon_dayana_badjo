import React, { useContext, useEffect, useState } from 'react'
import { FormControl, InputGroup, Button, Card } from 'react-bootstrap';
import { timeSince } from '../../config/calcTimeLeft';
import { commentsContext } from '../../contexts/commentsContext';

const Comment = (props) => {
    const { addComments, getCommentsForRoom, commentToEdit, getCommentToEdit, saveEditedComment, deleteComment, comments } = useContext(commentsContext)
    const [comment, setComment] = useState('')
    function handleChange(e) {
        //   console.log(true)
        setComment(e.target.value)
    }
    function handleDelete(com) {
        deleteComment(com)
    }
    useEffect(() => {
        getCommentsForRoom(props.doctor.id)
    }, [])
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    function creatingComment(e) {
        e.preventDefault()
        let time = new Date();
        let timeMls = Date.now();
        addComments(comment, user.username, props.doctor.id, time, timeMls)
        setComment('')
    }
    let commenting
    function handleEdit(item) {
        getCommentToEdit(item.id)
    }
    return (
        <>
            <div className='mt-4 container'>
                <InputGroup className="mb-3 createComment">
                    <FormControl
                        rows={2}
                        as="textarea"
                        placeholder="Оставьте отзыв о враче"
                        maxLength="140"
                        onChange={handleChange}
                        value={comment}
                    />
                    <Button style={{ backgroundColor: '#31B8BF', border: 'none' }} onClick={creatingComment}>
                        Отправить
                    </Button>
                </InputGroup>

            </div>
            <div className="mt-4 container bg-secondary">
                {
                    comments ? (comments.sort((a, b) => b.createdAtMs - a.createdAtMs).map(item => (
                        <Card key={item.id} className='mt-2'>
                            <Card.Header><span style={{ fontWeight: 'bold', color: '#979797' }}>{item.owner}</span> <span> {item.createdAt.slice(0, 10)}, {' '}
                                {timeSince(item.createdAtMs)} назад </span>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    {item.text}
                                </Card.Title>
                                {
                                    user.username === item.owner ? (
                                        <>
                                            <small onClick={() => handleDelete(item)} style={{ color: 'red', cursor: 'pointer' }}>Удалить</small>
                                            <small onClick={() => handleEdit(item)} style={{ marginLeft: '5px', color: 'darkgreen', cursor: 'pointer' }}>Изменить</small>
                                        </>
                                    ) : (<></>)
                                }

                            </Card.Body>
                        </Card>
                    ))) : (<h2>Loading...</h2>)
                }

            </div>
        </>
    )
};

export default Comment;