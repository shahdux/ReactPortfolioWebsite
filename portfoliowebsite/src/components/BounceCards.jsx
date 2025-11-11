
import { useEffect } from 'react';
import { gsap } from 'gsap';
import './BounceCards.css';
import clair from "../assets/clair.svg";
import joe from "../assets/joe.svg";
import amira from "../assets/amira.svg"



export default function BounceCards({
  className = '',
  // Accept an array of testimonial objects; defaults to 3 items using your provided content
  testimonials = [
    {
      text:
        'It Was great having you on the team! You really stepped up, stayed kind, and were always open to learning. Wishing you all the best in what’s next!',
      img: joe,
      name: 'Youssef Salah',
      role: 'Full Stack developer'
    },
    {
      text:
        'It was truly a pleasure having you on the team. Your talent is undeniable, but your commitment and dedication are entirely your own. I have no doubt you will achieve great things. Best of luck with your next chapter—we will be watching your journey!',
      img: amira,
      name: 'Amira Elbarbari',
      role: 'Service Delivery Manager'
    },
    {
      text:
        'Shahd consistently shows initiative and professionalism, always completing her work with care and punctuality. She communicates clearly, collaborates well with others, and actively seeks feedback to grow. Her adaptability and positive attitude make her a valuable team member in any environment. You made a real impact on our project.',
      img: clair,
      name: 'Clair Scollar',
      role: 'Sales & Service Strategist'
    }
  ],
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = 'elastic.out(1, 0.8)',
  transformStyles = [
    'rotate(6deg) translate(-120px)',
    'rotate(0deg)',
    'rotate(-6deg) translate(120px)'
  ],
  enableHover = true
}) {
  useEffect(() => {
    gsap.fromTo(
      '.card',
      { scale: 0 },
      {
        scale: 1,
        stagger: animationStagger,
        ease: easeType,
        delay: animationDelay
      }
    );
  }, [animationStagger, easeType, animationDelay]);

  const getNoRotationTransform = transformStr => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\([\s\S]*?\)/, 'rotate(0deg)');
    } else if (transformStr === 'none') {
      return 'rotate(0deg)';
    } else {
      return `${transformStr} rotate(0deg)`;
    }
  };

  const getPushedTransform = (baseTransform, offsetX) => {
    const translateRegex = /translate\(([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, `translate(${newX}px)`);
    } else {
      return baseTransform === 'none'
        ? `translate(${offsetX}px)`
        : `${baseTransform} translate(${offsetX}px)`;
    }
  };

  const pushSiblings = hoveredIdx => {
    if (!enableHover) return;
    // ensure we only process up to available testimonials
    const count = Math.min(testimonials.length, 3);
    for (let i = 0; i < count; i++) {
      gsap.killTweensOf(`.card-${i}`);
      const baseTransform = transformStyles[i] || 'none';

      if (i === hoveredIdx) {
        const noRotationTransform = getNoRotationTransform(baseTransform);
        gsap.to(`.card-${i}`, {
          transform: noRotationTransform,
          duration: 0.4,
          ease: 'back.out(1.4)',
          overwrite: 'auto'
        });
      } else {
        const offsetX = i < hoveredIdx ? -400 : 400; // <- increased spacing
        const pushedTransform = getPushedTransform(baseTransform, offsetX);

        const distance = Math.abs(hoveredIdx - i);
        const delay = distance * 0.1;

        gsap.to(`.card-${i}`, {
          transform: pushedTransform,
          duration: 0.6,
          ease: 'back.out(1.6)',
          delay,
          overwrite: 'auto'
        });
      }
    }
  };

  const resetSiblings = () => {
    if (!enableHover) return;
    const count = Math.min(testimonials.length, 3);
    for (let i = 0; i < count; i++) {
      gsap.killTweensOf(`.card-${i}`);
      const baseTransform = transformStyles[i] || 'none';
      gsap.to(`.card-${i}`, {
        transform: baseTransform,
        duration: 0.4,
        ease: 'back.out(1.4)',
        overwrite: 'auto'
      });
    }
  };

  return (
    <div
      className={`bounceCardsContainer ${className}`}
      style={{
        position: 'relative',
        width: containerWidth,
        height: containerHeight
      }}
    >
      {testimonials.slice(0, 3).map((item, idx) => (
        <div
          key={idx}
          className={`card card-${idx}`}
          style={{
            transform: transformStyles[idx] ?? 'none'
          }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
        >
          <p className="test1">{item.text}</p>

          <div className="iconwdes">
            <img src={item.img} alt={item.name} />
            <div className="namewrole">
              <p className="namec">{item.name}</p>
              <p className="role">{item.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
