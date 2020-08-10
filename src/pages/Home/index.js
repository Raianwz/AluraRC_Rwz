import React, { useEffect, useState } from 'react';
import Pacman from '../../assets/img/loading.svg';
import { Loading, PCimg } from './styles';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadadosIniciais] = useState([]);
  // http://localhost:8080/categorias?_embed=videos

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriaComVideos) => {
        setDadadosIniciais(categoriaComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>

      <Menu />
      {dadosIniciais.length === 0 && (
      <div>
        <Loading>Loading</Loading>
        <PCimg src={Pacman} alt="PacMan" />
      </div>
      )}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="Sonic Mania Adventures é uma animação lançada no Youtube durante 2018. A serie serve como uma continuação de Sonic Mania, continuando logo depois do final de Sonic Forces na perspectiva do Sonic Clássico. Os episódios foram lançados em um cronograma mensal."
              />

              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }
        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;
