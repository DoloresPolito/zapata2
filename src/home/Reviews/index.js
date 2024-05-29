"use client";
import styles from "./style.module.scss";
import Carousel from 'react-elastic-carousel';

export default function Reviews() {
  const items = [
    { id: 1, name: "Josefina Cervio", time: "hace 2 años", stars: "5 estrellas", text:"“Auriculoplastia en ambas orejas. El Dr. Zapata es un genio, y todo el equipo es excelente. Me sentí súper acompañada, tanto antes de la cirugía como después. Genial el post operatorio, siempre estuvieron disponibles para cualquier consulta o inquietud...”" },
    { id: 2, name: "Josefina Cervio", time: "hace 2 años", stars: "5 estrellas", text:"“Auriculoplastia en ambas orejas. El Dr. Zapata es un genio, y todo el equipo es excelente. Me sentí súper acompañada, tanto antes de la cirugía como después. Genial el post operatorio, siempre estuvieron disponibles para cualquier consulta o inquietud...”" },
    { id: 3, name: "Josefina Cervio", time: "hace 2 años", stars: "5 estrellas", text:"“Auriculoplastia en ambas orejas. El Dr. Zapata es un genio, y todo el equipo es excelente. Me sentí súper acompañada, tanto antes de la cirugía como después. Genial el post operatorio, siempre estuvieron disponibles para cualquier consulta o inquietud...”" },
    { id: 4, name: "Josefina Cervio", time: "hace 2 años", stars: "5 estrellas", text:"“Auriculoplastia en ambas orejas. El Dr. Zapata es un genio, y todo el equipo es excelente. Me sentí súper acompañada, tanto antes de la cirugía como después. Genial el post operatorio, siempre estuvieron disponibles para cualquier consulta o inquietud...”" },
  ];

  const carouselStyles = {
    padding: '20px',
    height: '100%',
    width: '100%',
  };

  const arrowStyles = {
    backgroundColor: '#333',
    height:'50px',
    width:'50px',
    borderRadius:'50%',
    color: 'white',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1, 
    cursor:'pointer'
  };

  const leftArrowStyles = {
    ...arrowStyles,
    left: '10px',
  };

  const rightArrowStyles = {
    ...arrowStyles,
    right: '10px',
  };

  const itemWrapperStyles = {
    padding: '10px',
    backgroundColor: 'transparent',
    borderRadius: '5px',
    height: '600px',
    width:'700px',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  };

  const itemName = {
    
    fontFamily: 'Plus Jakarta Sans, sans-serif !important',
    fontSize: '15px',
    fontWeight: '400',
    letterSpacing: '0.5px',
    marginBottom:'30px'
    
  }

  const itemStars = {
    
    fontFamily: 'Plus Jakarta Sans, sans-serif !important',
    fontSize: '12px',
    fontWeight: '300',
    letterSpacing: '0.5px',
    marginBottom:'50px'
    
  }

  const itemText = {
    
    fontFamily: 'Plus Jakarta Sans, sans-serif !important',
    fontSize: '18px',
    fontWeight: '200',
    letterSpacing: '0.5px',
    textAlign:'center'
    
  }

  return (
    <div className={styles.testimonios}>
      <div className={styles.carouselcontainer} style={carouselStyles}>
        <Carousel
          renderArrow={({ type, onClick, isEdge }) => {
            const pointer = type === 'PREV' ? '<' : '>';
            const style = type === 'PREV' ? leftArrowStyles : rightArrowStyles;
            return (
              <button
                type="button"
                onClick={onClick}
                disabled={isEdge}
                style={style}
              >
                {pointer}
              </button>
            );
          }}
        >
          {items.map((item) => (
            <div key={item.id} style={itemWrapperStyles} >
             
              <h3 style={itemName} >{item.name} - {item.time}</h3>
              <h3 style={itemStars} >{item.stars}</h3>
              <p style={itemText} >{item.text}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}