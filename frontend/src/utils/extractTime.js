export function extractTime(dateString) {
      if (!dateString) {
        throw new Error("dateString is required");
      }
    
      const date = new Date(dateString);
    
      if (isNaN(date.getTime())) {
        throw new Error("Invalid dateString provided");
      }
    
      const hours = padZero(date.getHours());
      const minutes = padZero(date.getMinutes());
    
      return `${hours}:${minutes}`;
    }
    
    function padZero(value) {
      return value.toString().padStart(2, "0");
    }
    