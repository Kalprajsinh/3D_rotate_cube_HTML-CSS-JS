function changeSize() {
    const widthInput = document.getElementsByClassName('dimension-input')[0];
    const cube = document.querySelector('.cube');
    const width = widthInput.value;
    if (width==0) {
      width = 20;
    }

    cube.style.width = width + 'px';
    cube.style.height = width + 'px';

    const c = document.querySelector('.container');
    const cvalue = widthInput.value*4;
    c.style.perspective = `${cvalue}px`;

    const translateZInput = document.querySelector('.dimension-input');
    const translateZ = translateZInput.value/2;
    const f1 = document.querySelectorAll('.face.front');
    f1[0].style.transform = `translateZ(${translateZ}px)`;

    const f2 = document.querySelectorAll('.face.back');
    f2[0].style.transform = `rotateY(180deg) translateZ(${translateZ}px)`;

    const f3 = document.querySelectorAll('.face.right');
    f3[0].style.transform = `rotateY(90deg) translateZ(${translateZ}px)`;

    const f4 = document.querySelectorAll('.face.left');
    f4[0].style.transform = `rotateY(-90deg) translateZ(${translateZ}px)`;

    const f5 = document.querySelectorAll('.face.top');
    f5[0].style.transform = `rotateX(90deg) translateZ(${translateZ}px)`;

    const f6 = document.querySelectorAll('.face.bottom');
    f6[0].style.transform = `rotateX(-90deg) translateZ(${translateZ}px)`;

  }

  const cube = document.querySelector('.cube');
  let rotateX = 0;
  let rotateY = 0;

  window.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowUp') {
      rotateX -= 90;
    } else if (event.code === 'ArrowDown') {
      rotateX += 90;
    } else if (event.code === 'ArrowLeft') {
      rotateY -= 90;
    } else if (event.code === 'ArrowRight') {
      rotateY += 90;
    }
    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
