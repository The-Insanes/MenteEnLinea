import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonToolbar,
} from '@ionic/react';
import CommentLabel from './CommentLabel';

interface Comment {
  labelName: string;
  labelInfo: string;
}

interface ContainerProps {
  className?: string;
  comments?: Comment[];
}

const CommentSection: React.FC<ContainerProps> = ({ className, comments }) => {
  const [items, setItems] = useState<Comment[]>([]);

  const generateItems = () => {
    const newItems: Comment[] = [];

    if (comments) {
      for (let i = 0; i < comments.length; i++) {
        newItems.push(comments[i]);
      }
    }
    setItems(prevItems => [...prevItems, ...newItems]);
  };

  useEffect(() => {
    generateItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comments]);

  return (
    <IonContent className={className}>
      <IonList>
        {items.map((item, index) => (
            <CommentLabel labelName={item.labelName}
              labelInfo={item.labelInfo}
              labelColor={index % 2 === 0 ? '#4F80FF' : '#F7AEF8'}
              elipseColor={index % 2 === 0 ? '#FF4DE6' : '#4F80FF'}
            />
        ))}
      </IonList>
      <IonInfiniteScroll
        onIonInfinite={(ev) => {
          generateItems();
          setTimeout(() => ev.target.complete(), 500);
        }}
      >
        <IonInfiniteScrollContent></IonInfiniteScrollContent>
      </IonInfiniteScroll>
    </IonContent>
  );
};

export default CommentSection;
