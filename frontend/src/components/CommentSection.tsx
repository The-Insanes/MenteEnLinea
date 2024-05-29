import './css/CommentSection.css'
import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
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

const PAGE_SIZE = 10; // Número de elementos por página

const CommentSection: React.FC<ContainerProps> = ({ className, comments }) => {
  const [items, setItems] = useState<Comment[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  const loadMoreItems = () => {
    if (!comments) return;

    const nextPage = currentPage + 1;
    const startIndex = currentPage * PAGE_SIZE;
    const endIndex = nextPage * PAGE_SIZE;
    const newItems = comments.slice(startIndex, endIndex);

    setItems(prevItems => [...prevItems, ...newItems]);
    setCurrentPage(nextPage);
  };

  useEffect(() => {
    setItems([]); // Resetear elementos al cambiar los comentarios
    setCurrentPage(0); // Resetear la página al cambiar los comentarios
    loadMoreItems(); // Cargar la primera página
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comments]);

  return (
    <div className={className}>
      <div className='container-comment-section'>
          <IonContent>
              <IonList>
                  {items.map((item, index) => (
                  <CommentLabel key={index}
                      labelName={item.labelName}
                      labelInfo={item.labelInfo}
                      labelColor={index % 2 === 0 ? '#4F80FF' : '#F7AEF8'}
                      elipseColor={index % 2 === 0 ? '#FF4DE6' : '#4F80FF'}
                  />
                  ))}
              </IonList>
              <IonInfiniteScroll
                  onIonInfinite={(ev) => {
                  loadMoreItems();
                  setTimeout(() => ev.target.complete(), 500);
                  }}
              >
                  <IonInfiniteScrollContent loadingText="Porfavor Espere..." loadingSpinner="bubbles"></IonInfiniteScrollContent>
              </IonInfiniteScroll>
          </IonContent>
        </div>
    </div>
  );
};

export default CommentSection;
