export default function guardrail(mathFunction) {
    const queue = [];
  
    try {
      const rslt = mathFunction();
      queue.push(rslt);
    } catch (error) {
      queue.push(error.message);
    } finally {
      queue.push('Guardrail was processed');
    }
  
    return queue;
  }
  