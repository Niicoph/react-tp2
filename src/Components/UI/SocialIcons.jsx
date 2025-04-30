
export default function SocialIcon({ href, src, alt }) {
    return (
      <li>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <img className="w-6 h-6" src={src} alt={alt} />
        </a>
      </li>
    );
  }